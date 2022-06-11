import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Users } from './dto/users.dto';

@Controller('dashboard')
export class DashboardController {

    protected data=[
        {id:1,name:"hendi"},
        {id:2,name:"heni"},
        {id:3,name:"hery"},
    ]

    /** dashboard/user */

    @Get('user')
    index(){
        return this.data;
    }

    /** dashboard/{id} */

    @Get('user/:id')
    detailUser(@Param() param){
        
        return this.findUserByID(param.id) ?? this.userNotFound();

    }

    /** dashboard/user */

    @Post('user')
    saveUser(@Body() user:Users){
        
        const newUser = user.name;

        return `Saving ${newUser}`;
        
    }

    /** dashboard/{id}/update */

    @Post('user/:id/update')
    updateUser(@Body() user:Users,@Param() param)
    {
        const userFound = this.findUserByID(param.id);

        if(userFound==undefined)
        {
            return this.userNotFound();
        }

        return `update user ${userFound.name} to ${user.name}`;
        
    }

    /** dashboard/{id}/delete */

    @Get('user/:id/delete')
    deleteUser(@Param() param)
    {

        const userFound = this.findUserByID(param.id);

        if(userFound==undefined)
        {
            return this.userNotFound()
        }

        return `Delete user ${userFound.name}`;

    }

    findUserByID(id:number)
    {
        for (const user of this.data) {
            if (user['id'] == id) {
                return user;
            }
        }
    }

    userNotFound()
    {
        return "User not found";
    }

}
