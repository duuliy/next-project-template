import React from 'react'
import ReactDOM from 'react-dom'
import { init } from '@module-federation/runtime'

init({
    name: 'fe3',
    remotes: [
        {
            name:'fe2',
            entry: "http://localhost:3001/_next/static/runtime/remoteEntry2.js"
        }
    ],
    shared: {
        react: {
            // version: '17.0.2',
            lib: () => React,
            shareConfig: {
                eager: true,
                singleton: true,
                requiredVersion: false
            }
        },
        'react-dom': {
            // version: '17.0.2',
            lib: () => ReactDOM,
            shareConfig: {
                eager: true,
                singleton: true,
                requiredVersion: false
            }
        }
    }
})
