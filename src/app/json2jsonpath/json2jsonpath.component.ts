import {Component, OnInit} from '@angular/core';
import {JsonpathService} from '../jsonpath.service';
import {JsonPathResponse} from './JsonPathResponse';

@Component({
  selector: 'app-json2jsonpath',
  templateUrl: './json2jsonpath.component.html',
  styleUrls: ['./json2jsonpath.component.css']
})
export class Json2jsonpathComponent implements OnInit {

  jsonpathService: JsonpathService;
  jsonPathResponse: JsonPathResponse = new JsonPathResponse();
  json: string;
  showSpinner: boolean;

  constructor(jsonPathService: JsonpathService) {
    this.jsonpathService = jsonPathService;
  }

  ngOnInit() {
  }

  getJson2jsonpath() {
    this.showSpinner = true;
    this.jsonpathService.generateJsonPaths(this.json).subscribe((data: JsonPathResponse) => {
      this.showSpinner = false;
      this.jsonPathResponse = data;
    }, (error => {
      this.showSpinner = false;
      console.log('error' + error.toString());
    }));
  }

  prettyPrint() {
    const object = JSON.parse(this.json);
    this.json = JSON.stringify(object, null, 3);
  }
}
