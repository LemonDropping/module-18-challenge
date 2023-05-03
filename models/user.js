const { Schema, model } = require('mongoose'); 

const schemaUser = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true, 
      trimmed: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'This must be a valid email address']
      },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ]
  }
)

schemaUser.virtual('friendCount')
.get(function() {
return this.friends.length
})

const User = model('user', schemaUser)

module.exports = User