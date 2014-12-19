using System;
using System.Linq;
using System.IO;

class Program
{
  static void Main(string[] args)
  {
    using (var reader = File.OpenText(args[0]))
    while (!reader.EndOfStream)
    {
      var line = reader.ReadLine();
      if (line == null) continue;
      Console.WriteLine(string.Join(" ", line.Split(' ').Reverse()));
    }
  }
}
