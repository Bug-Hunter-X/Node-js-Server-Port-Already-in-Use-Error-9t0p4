# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js server development: the failure to start a server because the specified port is already in use.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a solution.

## Problem

Attempting to start a Node.js HTTP server on a port that's already occupied by another process results in an error.  The error message may vary slightly depending on the operating system, but it typically indicates that the port is in use. 

## Solution

The solution involves checking if the port is available before attempting to bind the server to it.  Error handling is crucial; the improved code gracefully handles the port-in-use scenario. 