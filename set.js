const axios = require("axios");
const cheerio = require("cheerio");

async function fetchAndPrintGrid(docUrl) {
    try {
        const { data } = await axios.get(docUrl);
        const $ = cheerio.load(data);
        let extractedData = [];
        $("table tbody tr").each((index, row) => {
            const columns = $(row).find("td");
            if (columns.length === 3) {
                const x = parseInt($(columns[0]).text().trim(), 10);
                const character = $(columns[1]).text().trim();
                const y = parseInt($(columns[2]).text().trim(), 10);
                if (!isNaN(x) && !isNaN(y) && character) {
                    extractedData.push({ x, character, y });
                }
            }
        });
        if (extractedData.length === 0) {
            console.log("❌ No valid data found in the document.");
            return;
        }
        const maxX = Math.max(...extractedData.map(item => item.x)) + 1;
        const maxY = Math.max(...extractedData.map(item => item.y)) + 1;
        let grid = Array.from({ length: maxY }, () => Array(maxX).fill(" "));
        extractedData.forEach(({ x, character, y }) => {
            grid[y][x] = character; 
        });
        console.log("\n✅ ASCII Representation of Grid:\n");
        grid.forEach(row => console.log(row.join("")));
    } catch (error) {
        console.error("❌ Error fetching document:", error.message);
    }
}
const docUrl = "https://docs.google.com/document/d/e/2PACX-1vSZ1vDD85PCR1d5QC2XwbXClC1Kuh3a4u0y3VbTvTFQI53erafhUkGot24ulET8ZRqFSzYoi3pLTGwM/pub";
fetchAndPrintGrid(docUrl);
