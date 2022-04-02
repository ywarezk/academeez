#!/bin/bash

#
# this script is used to run the tests of a backend service
#
# Created March 23rd, 2021
# @author: ywarezk
# @version: 0.5.0
# @copyright: yellowHEAD
#

cd apps/$1
export COVERAGE_DIR=../../../reports/$1
export JUNIT_REPORT_PATH=../../../reports/$1/unit-test.xml
npx jenkins-mocha --cobertura --reporter mocha-jenkins-reporter --timeout 1200000 -r ../../../node_modules/ts-node/register -r ../../../node_modules/tsconfig-paths/register **/*.spec.ts
status=$?
cd ../../..
mv reports/$1/cobertura-coverage.xml reports/$1/coverage.xml
exit $status

