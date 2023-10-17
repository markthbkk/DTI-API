const mongoose = require('mongoose');

const dteventSchema = new mongoose.Schema(
  {
    EventTitle: {
      type: String,
      required: false,
    },
    EventText: {
      type: String,
      required: true,
    },
    Notes: {
      type: String,
      required: false,
    },
    EventStatus: {
      type: String,
      required: false,
      enum: ['Open', 'Closed', 'Resolved'],
      default: 'Open',
    },
    id: {
      type: String,
      required: true,
      unique: true,
    },
    Faculty: {
      type: String,
      required: false,
    },
    Category: {
      type: String,
      required: false,
    },
    EndpointName: { type: String, required: false },
    IPv4: {
      type: String,
      required: false,
    },
    IPv6: {
      type: String,
      required: false,
    },
    MAC: {
      type: String,
      required: false,
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now,
    },
    Detected: {
      type: Date,
      required: false,
    },
    Resolved: {
      type: Date,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const DTEvent = mongoose.model('dtevent', dteventSchema);

module.exports = DTEvent;
