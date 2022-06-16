import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { Response } from 'express';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private dashboardService: DashboardService) {}

    @Get()
    index() {
        return "Dashboard Page";
    }

    @Get('contact')
    contact(filter:string) {
        if(filter == undefined) {
            return "All contact";
        }

        return "filter contact by : " + filter;
    }

    @Get('filter')
    filterContact() {
        return this.contact('ferdi');
    }

    @Get('user')
    user() {
        return this.dashboardService.users;
    }

    @Get('user/:id')
    otherUser(@Param('id', ParseIntPipe) param: number, @Res() res: Response){
        const dataUsers = this.dashboardService.findDataById(param);
        
        if(dataUsers) {
            res.send(dataUsers);
        } else {
            res.status(400).send({message: "User Not Found!!"});
        }
    }
    
}