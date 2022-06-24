const express = require("express");
const fs = require("fs");
const Flights = require("./../models/Flight.json");

exports.getAllFlight = (req, res) => {
  res.status(200).json({
    status: "successful",
    data: {
      Flights,
    },
  });
};

exports.getFlight = (req, res) => {
  const id = req.params.id;

  const flight = Flights.find((flight) => {
    return String(flight.id === id);
  });

  if (!flight) {
    res.status(400).json({
      message: "Flight not found",
    });
  }

  res.status(200).json({
    status: "Success",
    data: {
      flight,
    },
  });
};

exports.bookFlight = (req, res) => {
  const newUser = req.body;

  Flights.push(newUser);

  let stringifiedData = JSON.stringify(Flights, null, 2);

  fs.writeFile("./models/Flight.json", stringifiedData, (err) => {
    if (err) console.log(err);
  });

  res.status(201).json({
    status: "New Flight booked successfully",
    data: {
      newUser,
    },
  });
};

exports.updateFlight = (req, res) => {
  const id = req.params.id;
  const flight = Flights.find((flight) => String(flight.id) === id);

  let body = req.body;

  flight.title = body.title;
  flight.time = body.time;
  flight.price = body.price;
  flight.date = body.date;

  res.status(201).json({
    message: "Flights updated",
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const flight = Flights.find((flight) => String(flight.id) === id);

  Flights.splice(Flights.indexOf(flight), 1);

  res.status(200).json({
    message: "User deleted",
  });
};
