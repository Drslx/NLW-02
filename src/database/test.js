const Database = require("./db") // Exportar o db
const createProffy  = require("./createProffy")

Database.then(async (db) => {

    // Inserir dados
    proffyValue = { // Dados dos proffys no banco de dados
        name: "Douglas",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "989827862",
        bio: "Entusiasta em Artes. Apaixonado por ensinar e por mudar a vida de pessoas através da arte. Mais de 200.000 pessoa já passaram pelo meu curso",
    }

    classValue = {
        subject: 1,
        cost: "30",
        // id sera gerado pelo banco de dados
    }

    classScheduleValues = [
        // class_id será gerado pelo banco de dados, apos cadastrarmos a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]
     //  await createProffy(db, {proffyValue, classScheduleValues, classValue})

    // Consultar os dados inseridos
    const selectedProffys =  await db.all("SELECT * FROM proffys") 
     // console.log(selectedProffys)

     //  Consultar as classes de um determinado professor
     //  e trazer junto os dados do professor

     const selectClassesAndProffys = await db.all(`
     
        SELECT classes. *, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;

     `)
    // console.log(selectClassesAndProffys)

     // 
     const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
        
     
     `)

     // console.log(selectClassesSchedules)
})

