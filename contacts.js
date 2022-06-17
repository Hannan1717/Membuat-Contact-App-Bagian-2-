const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
   fs.mkdirSync(dirPath);
}

// membuat file contacts.json
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
   fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanContacts = (nama, email, noHp) => {
   const contact = { nama, email, noHp };
   const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
   const contacts = JSON.parse(fileBuffer);

   // cek duplikat
   const duplikat = contacts.find((contact) => contact.nama == nama);
   if (duplikat) {
      console.log(chalk.red.inverse.bold("kontak sudah terdaftar, gunakan nama lain!!"));
      return false;
   }

   //  cek email
   if (email) {
      if (!validator.isEmail(email)) {
         console.log(chalk.red.inverse.bold("Email tidak valid!!"));
         return false;
      }
   }

   // cek no Hp
   if (!validator.isMobilePhone(noHp, "id-ID")) {
      console.log(chalk.red.inverse.bold("NO Hp tidak valid!!"));
      return false;
   }
   contacts.push(contact);

   fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

   console.log(chalk.green.inverse.bold("data anda tersimpan"));
};

module.exports = { simpanContacts };
