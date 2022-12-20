import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

export interface Response<Test>{
    data:Test;
}

@Injectable()
export class TransformInterceptor<Test> implements NestInterceptor<Test,Response<Test>>{
    intercept(context: ExecutionContext, next: CallHandler<Test>): Observable<Response<Test>> | Promise<Observable<Response<Test>>> {
        return next.handle().pipe(map(data=>({data})));
    }
}