"use client"

import React from 'react'
import {Store } from '@reduxjs/toolkit'
import { Provider } from "react-redux"
const App = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={Store}>{children}</Provider>
}

export default App
