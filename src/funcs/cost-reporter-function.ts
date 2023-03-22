// ~~ Generated by projen. To modify, edit .projenrc.ts and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for CostReporterFunction
 */
export interface CostReporterFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/funcs/cost-reporter.
 */
export class CostReporterFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: CostReporterFunctionProps) {
    super(scope, id, {
      description: 'src/funcs/cost-reporter.lambda.ts',
      ...props,
      runtime: new lambda.Runtime('nodejs18.x', lambda.RuntimeFamily.NODEJS),
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/funcs/cost-reporter.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}