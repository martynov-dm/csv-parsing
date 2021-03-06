import { MatchReader } from "./inheritance/MatchReader";
import { MatchResult } from "./MatchResult";
import {CsvFileReader} from "./csvFileRead";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(CsvFileReader)
matchReader.load();

let manUnitedWins = 0;


}

