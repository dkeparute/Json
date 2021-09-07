// const f = require("./funkcijos.js");

// console.log(f.suma(1, 2));

// // taip rasytusi jeigu butu prie type taikoma common js

// taip rasosi jeigu taikoma type module (es modulius)


// import * as f from "./funkcijos.js";
// console.log(f.suma(1, 2));



// const fs = require(fs/promises);

// fs.readFile("a.txt", { encoding: "utf-8" })
//     .then(data => { console.log(data) })
//     .catch(err => {
//         console.log("Klaida skaitant faila", err)
//     });

// IDENTISKAI PERRASYTAS FAILAS
import * as fs from "fs/promises";
    async function main() {
        try {
            let data = await fs.readFile("a.txt", {
                encoding: "utf-8"
            });
            console.log(data);
        }
        catch(err) {
            console.log("Klaida skaitant faila", err);
        }
    }
    main();
    // tam kad galeciau naudotis await, reikia naudoti async funkcija