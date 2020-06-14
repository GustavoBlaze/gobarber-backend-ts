import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/HashProvider';
import BCryptHashProvider from './HashProvider/implementations/BCryptHashPriver';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
