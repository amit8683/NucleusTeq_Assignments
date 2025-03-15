
public class Main {
    public static void main(String[] args) {
        GraduateStudent gradStudent = new GraduateStudent("John Doe", 101, 88.5, "Computer Science");
        gradStudent.displayDetails(); // Polymorphism demonstration

        EncapsulatedStudent student = new EncapsulatedStudent();
        student.setName("Alice");
        student.setRollNumber(105);

        System.out.println("Encapsulated Student: " + student.getName() + ", Roll Number: " + student.getRollNumber());
    }
}
class Student {
    private String name;
    private int rollNumber;
    private double marks;

    // Constructor
    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public double getMarks() {
        return marks;
    }

    // Method to display student details
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

class GraduateStudent extends Student {
    private String specialization;

    // Constructor
    public GraduateStudent(String name, int rollNumber, double marks, String specialization) {
        super(name, rollNumber, marks);
        this.specialization = specialization;
    }

    // Method to display graduate student details
    public void displayDetails() {
        super.displayDetails(); // Calling parent class method
        System.out.println("Specialization: " + specialization);
    }
}


class EncapsulatedStudent {
    private String name;
    private int rollNumber;

    // Getter and Setter methods
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public void setRollNumber(int rollNumber) {
        if (rollNumber > 0) { // Validation example
            this.rollNumber = rollNumber;
        } else {
            System.out.println("Invalid Roll Number!");
        }
    }
}
