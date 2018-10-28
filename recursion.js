function recursion(treeMap) {
    const grades = [];
    let arr = (parent, grade) => {
      if (!parent) return null;
      
      if (!grades[grade]) grades[grade] = [parent.value];
            else grades[grade].push(parent.value);
      
    arr(parent.right, grade + 1);
    arr(parent.left, grade + 1);
      
      return null;
    };
    arr(treeMap, 0);
    return grades;
  };
  recursion ({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
