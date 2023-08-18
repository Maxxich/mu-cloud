const nextJest = require('next/jest')
const path = require('path')

const createJestConfig = nextJest({
  dir: "./"
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [
    path.resolve(__dirname, "jest.setup.js")
 ],
  reporters: [
    "default",
    [
      "jest-html-reporters", 
      {
        publicPath: path.resolve(__dirname, "reports"),
        filename: "unitTestsReport.html"
      }
    ]
  ]
}

module.exports = createJestConfig(customJestConfig)