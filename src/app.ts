import { UserModel } from './model';
import { Helper } from './helper';

Helper.mongoFind(UserModel).then( (result) => {
    console.log(result);
});


