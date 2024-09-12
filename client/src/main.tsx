import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ChakraProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ChakraProvider>
			<StrictMode>
				<App />
			</StrictMode>
		</ChakraProvider>
	</Provider>
)
