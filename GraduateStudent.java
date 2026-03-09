package com.cs.junghu;

public class GraduateStudent extends UndergraduateStudent{
	String researchTopic;
	GraduateStudent(String a, int b, String c, int d, String e) {
		super(a, b, c, d);
		researchTopic = e;
	}
	public void displayDetails() {
		super.displayDetails();
		System.out.println("Research Topic: " + this.researchTopic);
	}

	public static void main(String[] a) {
		Student s = new Student("Huichan Jung", 1234567, "Computer Science");
		s.displayDetails();
		
		UndergraduateStudent u = new UndergraduateStudent("Huichan Jung", 1234567, "Computer Science", 2);
		u.displayDetails();
		
		GraduateStudent g = new GraduateStudent("Huichan Jung", 1234567, "Computer Science", 2, "AI");
		g.displayDetails();
	}
}
