import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Example } from './../types/example';

export const Addition: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const blah: Example = {
        blargh: '1234'
    };

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hello world! Your function executed successfully ${blah.blargh}`,
            input: event
        })
    };
};
