import itemmodel  from "../models/itemmodels.js"

export const getItemcontroller = async(req,res)=>{
    try {
       let items =  await itemmodel.find();
       res.send(items)

    } catch (error) {
        console.log(error);
    }
}

export const postItemcontroller = async(req,res)=>{
    try {
        let itemobject =req.body;
      const data =  await new itemmodel(itemobject).save()
        console.log("tadddd",data);
        res.send(itemobject)

    } catch (error) {
        console.log(error);
    }
}