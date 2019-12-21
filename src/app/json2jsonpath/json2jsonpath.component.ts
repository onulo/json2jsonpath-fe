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
  jsonPathResponse: JsonPathResponse;
  json: string;

  constructor(jsonPathService: JsonpathService) {
    this.jsonpathService = jsonPathService;
  }

  ngOnInit() {
  }

  getJson2jsonpath() {
    this.jsonpathService.generateJsonPaths(this.json).subscribe((data: JsonPathResponse) => {
      this.jsonPathResponse = data;
    });
  }

  prettyPrint() {
    const object = JSON.parse(this.json);
    this.json = JSON.stringify(object, null, 3);
  }
}
