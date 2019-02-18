//==================
//      Puerto
//==================
process.env.PORT = process.env.PORT || 3000;

//==================
//      Entorno
//==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//====================
// Vencimiento del token
//====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
//48h (48horas)
process.env.CADUCIDAD_TOKEN = '48h';

//==================
// Seed de autotenticacion
//==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==================
//  Base de datos
//==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//==================
//  Google Client ID
//==================
process.env.CLIENT_ID = process.env.CLIENT_ID || '806074740442-0c88ab9i4h4r6uvpi0rk40j5o74puvbf.apps.googleusercontent.com'