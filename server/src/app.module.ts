import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

import { TrackModule } from "./track/track.module";
import { FileModule } from "./file/file.module";

@Module({
    imports: [
        MongooseModule.forRoot("mongodb://localhost:27017/music-app"),
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, "static") }),
        TrackModule,
        FileModule,
    ],
})
export class AppModule {}
