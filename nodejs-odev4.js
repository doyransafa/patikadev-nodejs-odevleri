import * as fs from 'node:fs';


// DOSYA OLUSTURMA
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log('Hata alindi!')
})

// DOSYA OKUMA
fs.readFile('employees.json', 'utf-8', (err, data) => {
    if (err) console.log(err)
    console.log(JSON.parse(data))
})

// DOSYA GUNCELLEME
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "surname" : "Employee 2 Surname", "salary": 2000}', (err) => {
    if (err) console.log('Hata alindi!')
})

// DOSYA SILME
fs.rm('employees.json', (err) => {
    if (err) console.log(err)
    console.log('Dosya silindi')
})