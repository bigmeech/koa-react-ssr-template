import { getApplication } from './application';
import config from 'config';

getApplication(config.get('server'))
    .listen(config.get('server.port'));
