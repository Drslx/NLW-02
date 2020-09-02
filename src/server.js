
// Servidor 
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

// Configurar nunjucks para deixar lista de proffys dinâmicos
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true 
})

// Configurar arquivos estaticos (css, scripts, imagens)
server

.use(express.urlencoded({extended: true}))
.use(express.static("public")) 

.get("/", pageLanding) // Rota page-landing
.get("/study", pageStudy) // Rota da page-study
.get("/give-classes", pageGiveClasses) // Rota da page-give-classes
.post("/save-classes", saveClasses)

.listen(5500) // Start do servidor na porta
