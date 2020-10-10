import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult
} from "aws-lambda";


export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const eventJson = JSON.stringify(event);

    return {
        statusCode: 200,
        body: eventJson
    }
}
