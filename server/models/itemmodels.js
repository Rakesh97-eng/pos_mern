import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    itemname:{type:String,require:true},
    price:{type:Number,require:true}
})

const itemmodel =  mongoose.model('item',itemSchema);

export default itemmodel;







    