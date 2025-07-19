import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5460,
  username: 'postgres',
  password: 'softsuave',
  database: 'rbms_db', // ✅ new DB here
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
}), RoleModule, PermissionModule, UserModule, BookModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
