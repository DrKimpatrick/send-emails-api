import App from './app';
import env from './helper/env';

App.app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`)
})