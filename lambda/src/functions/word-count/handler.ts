import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { countWordTypes } from './countWordTypes';

const processText: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    let text;
    if (typeof event.body === 'string') {
      text = JSON.parse(event.body).text;
    } else {
      text = event.body.text;
    }
    const wordCounts = countWordTypes(text);

    return formatJSONResponse({
      message: 'Processed text successfully',
      data: wordCounts,
    });

  } catch (error) {
    return formatJSONResponse({
      message: 'An error occurred while processing the text',
      error: error.message,
    }); 
  }
};

export const main = middyfy(processText);