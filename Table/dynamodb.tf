resource "aws_dynamodb_table" "messages" {
  name         = "Shui-nyaste"
  billing_mode = "PAY_PER_REQUEST"

  attribute {
    name = "Shui-nyaste"
    type = "S"
  }

  attribute {
    name = "user_id"
    type = "S"
  }

  hash_key = "Shui-nyaste"  # Partition key är fortfarande Shui-nyaste
}
