const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
    minlength: 10,
  },
  civil: {
    type: String,
    enum: ["single", "married", "widowed", "divorced"],
    required: true,
  },
  role: {
    type: String,
    ref: "User",
    required: true,
  },
});

const UserProfile = mongoose.model("UserProfile", userSchema);
export default UserProfile;
