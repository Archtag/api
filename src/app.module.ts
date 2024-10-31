import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AccountModule } from './account/account.module';
// import { WorkerModule } from './worker/worker.module';
// import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
    }),
    // AccountModule,
    // WorkerModule,
    // AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
