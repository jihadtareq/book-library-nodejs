const cron = require("node-cron");
const sequelize = require('./src/database/models').sequelize
const { QueryTypes } = require('sequelize');
const date = require('date-and-time') 
const now  =  new Date(); 


//run every minute
cron.schedule('* * * * *', async () => {
    try {
     const processes = await sequelize.query('SELECT * FROM borrowing_processes WHERE is_over_due = false', { type: QueryTypes.SELECT });

      for (const process of processes) {
        if(date.format(now,'YYYY-MM-DD HH:mm:ss') > date.format(process.due_date,'YYYY-MM-DD HH:mm:ss')){
           await sequelize.query(`UPDATE borrowing_processes SET is_over_due=true WHERE id= ${process.id}`)
        }
      }
      console.log('Cron job executed successfully');
    } catch (error) {
      console.error('An error occurred in the cron job:', error);
    }
  });

