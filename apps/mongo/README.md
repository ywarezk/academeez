# @az/mongo

Deployment of a mongo database that is used for students to
practice mongo interaction.

## Installation

```bash
helm install -f chart/values.yaml --namespace dev --set username=**** --set password=***** --debug --dry-run az-mongo ./chart
```
