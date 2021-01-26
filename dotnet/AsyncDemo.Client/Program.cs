using System;
using System.Threading;
using System.Threading.Tasks;

namespace AsyncDemo.Client
{
  class Program
  {
    static void Main(string[] args)
    {
      var p = new Program();

      p.PlayWithAsync().GetAwaiter().GetResult();

      System.Console.WriteLine("--END OF PROGRAM--");
    }

    public void PlayWithThread()
    {
      var t1 = new Thread(() => { Compute('A'); });
      System.Console.WriteLine("--AFTER T1--");
      var t2 = new Thread(() => { Compute('B'); });
      System.Console.WriteLine("--AFTER T2--");
      var t3 = new Thread(() => { Compute('C'); });
      System.Console.WriteLine("--AFTER T3--");

      t1.Start();
      t2.Start();
      t3.Start();

      t1.Join();
      t2.Join();
      t3.Join();
    }

    public void PlayWithTask()
    {
      var t1 = new Task(() => { Compute('A'); });
      System.Console.WriteLine("--AFTER T1--");
      var t2 = new Task(() => { Compute('B'); });
      System.Console.WriteLine("--AFTER T2--");
      var t3 = new Task(() => { Compute('C'); });
      System.Console.WriteLine("--AFTER T3--");

      t1.Start();
      t2.Start();
      t3.Start();

      Task.WaitAll(t1, t2, t3);
    }

    public async Task PlayWithAsync()
    {
      await Task.Run(() => { Compute('A'); });
      System.Console.WriteLine("--AFTER T1--");
      await Task.Run(() => { Compute('B'); });
      System.Console.WriteLine("--AFTER T2--");
      await Task.Run(() => { Compute('C'); });
      System.Console.WriteLine("--AFTER T3--");
    }

    public void Compute(char input)
    {
      for (int i = 0; i < 1000; i++)
      {
        Console.Write(input);
      }
    }
  }
}
