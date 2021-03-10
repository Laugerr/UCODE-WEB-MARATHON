describe("checkBrackets",function(){
    it("((Lma7al))))))))", function() {
      assert.equal(checkBrackets('((Lma7al)))))))'), 5);
    });
    it("path)))()))()push(seg)(", function() {
        assert.equal(checkBrackets('path)))()))()push(seg)('), 6)
    });
    it("NaN", function() {
      assert.equal(checkBrackets(NaN), -1);
    });
    it("6565",function(){
      assert.equal(checkBrackets(6565), 1);
    })
    it("97ab(#()@#$%",function(){
        assert.equal(checkBrackets('97ab(#()@#$%'), 1);
      })
    it("(((((())()(((((())))))hh",function(){
      assert.equal(checkBrackets('(((((())()(((((())))))'), 4);
    })
    it("93g99(#$))((G#$()$(G#)(#$",function(){
      assert.equal(checkBrackets('93g99(#$))((G#$()$(G#)(#$'), 4);
    })
    it("woief$)(SDA()()))))((",function(){
        assert.equal(checkBrackets('woief$)(SDA()()))))(('), 6);
      })
      it("s(())))(()((()@#%$&()",function(){
        assert.equal(checkBrackets('s(())))(()((()@#%$&()'), 5);
      })
      it("@!#RRWF()(WE)()S(A)R(SFG)(T)(",function(){
        assert.equal(checkBrackets('@!#RRWF()((()WE)()S(A)R(SFG)(T)('), 2);
      })
      it("Q*EF(#$(D)G(ETG(**@J#(",function(){
        assert.equal(checkBrackets('Q*EF(#$(D)G(ETG(**@J#('), 1);
      })
      it("ASFG*#&()!@#$()((($!@%()",function(){
        assert.equal(checkBrackets('ASFG*#&()!@#$()((($!@%()'), 32);
      })
    it("hh9832())(8qegfDvs(((dds304()$e4940()",function(){
      assert.equal(checkBrackets('hh9832())(8qegfDvs(((dds304()$e4940()'), 5);
    })
    it("SD(FG)DGSH()RTH(RHT()HHDG)((",function(){
      assert.equal(checkBrackets('SD(FG)DGSH()RTH(RHT()HHDG)(('), 3);
    })
    it("hh9832830fdfbgvfsbafdb(((((@%^#%)4()$e4940()",function(){
        assert.equal(checkBrackets('hh9832830fdfbgvfsbafdb(((((@%^#%)4()$e4940()'), 1);
      })
});
