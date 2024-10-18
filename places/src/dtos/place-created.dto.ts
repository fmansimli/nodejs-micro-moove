import { IsString, MinLength, MaxLength } from "class-validator";

export class PlaceCreatedDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  public name: string;

  @IsString()
  @MinLength(10)
  @MaxLength(20)
  public desc: string;
}
