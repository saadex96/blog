/**
 * Todo API Endpoints
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * The todo record
 */
export interface Todo {
    description?: string;

    /**
     * The primary key
     */
    id: string;

    title?: string;

}
