using System.IO;
using System.Collections.Generic;

class Program
{
  static void Main(string[] args)
  {
    using (StreamReader reader = File.OpenText(args[0]))
    while (!reader.EndOfStream)
    {
      var line = reader.ReadLine();
      if (line == null) continue;
      System.Console.WriteLine(line.ToLower());
    }
  }
}
