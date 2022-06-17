const yargs = require("yargs");
const { simpanContacts } = require("./contacts");

yargs.command({
   command: "add",
   describe: "Tambah Contact",
   builder: {
      nama: {
         describe: "nama lengkap",
         demandOption: true,
         type: "string",
      },
      email: {
         describe: "email",
         demandOption: false,
         type: "string",
      },
      noHp: {
         describe: "Nomor ponsel",
         demandOption: true,
         type: "string",
      },
   },
   handler(argv) {
      simpanContacts(argv.nama, argv.email, argv.noHp);
   },
});

yargs.parse();
