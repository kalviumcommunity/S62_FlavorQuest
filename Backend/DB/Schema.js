const entitySchema = new mongoose.Schema({
    name: String,
    age: Number,
    description: String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});
