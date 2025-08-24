import express from "express";

export const createUser = (req, res) => {
  res.json({
    msg: `user is created!`,
  });
};

export const removeUser = (req, res) => {
  res.json({
    msg: `user is removedUser!`,
  });
};
