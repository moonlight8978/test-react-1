import '@testing-library/jest-dom/extend-expect'

import './src/initializers/font-awesome'

global.console.error = jest.fn().mockImplementation(() => {})
jest.mock('highlight.js/lib/highlight')

jest.mock('./src/api/client')
jest.mock('./src/services/report-error')
