const {  ProfessorDetail } = require("../db");

async function schoolviseprofessor (req,res) 

{

    const schoolname = req.params.schoolname;    
    console.log(schoolname);    

    const Professors = await ProfessorDetail.find ({ college_name: schoolname , verification : "Verified" });       
    
    if (!Professors) {
        return res.status(401).json({
            message: 'No Professors found'
        });
    }       

    res.json ({
        Professors : Professors ,   
    })   



}

module.exports = schoolviseprofessor;  // Export the function for use in other files.